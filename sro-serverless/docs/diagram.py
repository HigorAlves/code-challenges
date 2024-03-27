from diagrams import Diagram, Cluster
from diagrams.aws.compute import Lambda
from diagrams.aws.network import APIGateway
from diagrams.aws.database import DocumentDB
from diagrams.aws.management import Cloudwatch
from diagrams.aws.devtools import XRay
from diagrams.aws.security import WAF
from diagrams.onprem.monitoring import Grafana
from diagrams.onprem.client import User

with Diagram("Serverless Full Stack Application Architecture with Security", show=False, direction="TB"):
    user = User("End User")
    frontend = Lambda("Next.js Frontend")
    api_gateway = APIGateway("Central API Gateway")
    waf = WAF("AWS WAF")

    with Cluster("Backend APIs"):
        with Cluster("Authentication Service"):
            signin = Lambda("Sign-in")
            signup = Lambda("Sign-up")
            refresh = Lambda("Refresh Token")

        with Cluster("User CRUD Operations"):
            create_user = Lambda("Create User")
            read_user = Lambda("Read User")
            update_user = Lambda("Update User")
            delete_user = Lambda("Delete User")

    db = DocumentDB("MongoDB Atlas")
    monitoring = Cloudwatch("CloudWatch")
    tracing = XRay("X-Ray")
    grafana = Grafana("Grafana Dashboards")

    user >> frontend >> api_gateway >> waf
    waf >> signin >> monitoring
    signin >> tracing
    waf >> signup >> monitoring >> create_user
    signup >> tracing
    waf >> refresh >> monitoring
    refresh >> tracing
    waf >> [read_user, update_user, delete_user] >> monitoring
    [read_user, update_user, delete_user] >> tracing
    [create_user, read_user, update_user, delete_user] >> db
    monitoring >> grafana
    tracing >> grafana
