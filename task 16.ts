const c = {
  id: 1,
  replies: [
    {
      id: 2,
      replies: []
    },
    {
      id: 3,
      replies: [
        { id: 4, replies: [] }
      ]
    }
  ]
};

function countComments(x: { id: number; replies: any[] }): number {
  let total = 1;

  for (let i = 0; i < x.replies.length; i++) {
    total += countComments(x.replies[i]);
  }

  return total;
}

console.log(countComments(c));