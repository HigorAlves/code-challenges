## Problem 01

A group of friends at a party drink soda or beer. Thirteen friends drink soda, ten drink beer, and five drink soda and beer. How many friends are present at the party?

## Solution

To solve this problem, we can use the formula for finding the number of elements in the union of two sets:

\[
|A \cup B| = |A| + |B| - |A \cap B|
\]

Where:
- \( |A \cup B| \) is the total number of friends who drink either soda or beer or both
- \( |A| \) is the number of friends who drink soda (13)
- \( |B| \) is the number of friends who drink beer (10)
- \( |A \cap B| \) is the number of friends who drink both soda and beer (5)

Plugging these numbers into the formula gives:

\[
|A \cup B| = 13 + 10 - 5
\]
\[
|A \cup B| = 23 - 5
\]
\[
|A \cup B| = 18
\]

So, 18 friends are present at the party.

## Problem 02

Sarah assumes her watch is 5 minutes late, but it is actually 10 minutes early. Sarah arrives for an appointment thinking she is 15 minutes late compared to the scheduled time. When did she actually arrive? On time, late or early? In case she arrived early, by how many minutes?

## Solution

Sarah thinks her watch is 5 minutes late but it's actually 10 minutes early. This creates a discrepancy between Sarah's perception of time and the actual time:

\[
\text{Discrepancy} = 5 \text{ minutes (she thinks she is late) } + 10 \text{ minutes (she is actually early) } = 15 \text{ minutes}
\]

So, her watch is 15 minutes faster than she believes.

Sarah arrives for her appointment thinking she is 15 minutes late. Given the 15-minute discrepancy between her watch and the actual time, she is actually:

\[
15 \text{ minutes (she thinks she is late) } + 15 \text{ minutes (discrepancy) } = 30 \text{ minutes early}
\]

So, Sarah arrives 30 minutes early for her appointment.

## Problem 03

A pizzeria carries out a promotion with the ad "Buy one and get another one for half the price". A different promotion that offers the same discount percentage is:

(a) "Take two, pay one"
(b) "Take three and pay one"
(c) "Take three, pay two"
(d) "Take four and pay for three"
(e) "Take five, pay four"

## Solution

To understand which promotion offers the same discount percentage, we first need to understand how much a customer pays in the initial promotion: "Buy one and get another one for half the price."

Let's assume the price of one pizza is \( P \).

In the initial promotion, the customer would pay \( P + \frac{P}{2} = \frac{3P}{2} \) for two pizzas.

The discount per pizza in this case would be \( \frac{\frac{3P}{2}}{2} = \frac{3P}{4} \).

Now let's evaluate the options:

### (a) "Take two, pay one"

In this case, the customer would pay \( P \) for two pizzas. The discount per pizza is \( \frac{P}{2} \). This is not equal to \( \frac{3P}{4} \).

### (b) "Take three and pay one"

Here, the customer would pay \( P \) for three pizzas. The discount per pizza is \( \frac{P}{3} \). This is not equal to \( \frac{3P}{4} \).

### (c) "Take three, pay two"

Here, the customer would pay \( 2P \) for three pizzas. The discount per pizza is \( \frac{2P}{3} \). This is not equal to \( \frac{3P}{4} \).

### (d) "Take four and pay for three"

In this case, the customer would pay \( 3P \) for four pizzas. The discount per pizza is \( \frac{3P}{4} \). This is equal to \( \frac{3P}{4} \).

### (e) "Take five, pay four"

Here, the customer would pay \( 4P \) for five pizzas. The discount per pizza is \( \frac{4P}{5} \). This is not equal to \( \frac{3P}{4} \).

So, the only promotion that offers the same discount percentage as the original one is **(d) "Take four and pay for three"**.

## Problem 04

Lorenna's phone number has 8 digits. Sarah only remembers the first four digits in the correct order. Although she remembers the last four digits and knows that none of them repeats, she has forgotten their order. What's the number of attempts Sarah can make before she can get Lorenna's phone number right?

## Solution

Sarah remembers the first four digits in the correct order. Therefore, she does not need to guess those digits, leaving her with only the last four digits to figure out.

Since the last four digits do not repeat, they can be arranged in a number of ways equal to the number of permutations of those 4 unique digits.

The formula for permutations of \( n \) distinct objects taken \( r \) at a time is \( P(n, r) = \frac{n!}{(n - r)!} \).

In this case, \( n = 4 \) and \( r = 4 \), so:

\[
P(4, 4) = \frac{4!}{(4 - 4)!} = \frac{4 \times 3 \times 2 \times 1}{0!} = 24
\]

Therefore, Sarah could make up to 24 attempts before getting Lorenna's phone number correct.
