// Basic Implementation of linked list reversal in JS

// While traversing through LL
// use pointers to keep track of following LL (temp), and previous nodes (prev)
// point current node to its previous node
// set current to temp to continue traversal

function reverseLL(head) {
  let current = head;
  let prev = null;
  let temp;

  while (current) {
    temp = current.next;

    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
