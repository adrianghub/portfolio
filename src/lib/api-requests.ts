import { CommentData } from "@/types";

export const submitComment = async (
  commentObj: Omit<CommentData, 'createdAt'>
) => {
  const result = await fetch('/api/submitComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentObj)
  });

  return result.json();
};

export const subscribe = async ({
  name,
  email
}: {
  name?: string;
  email: string;
}) => {
  const result = await fetch(`/api/subscribe`, {
    body: JSON.stringify({
      name,
      email
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  return result.json();
};

export const checkout = async ({
  quantity,
  name
}: {
  quantity: number | null;
  name?: string;
}) => {
  const result = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quantity,
      name
    })
  });

  return result.json();
};
