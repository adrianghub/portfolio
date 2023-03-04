'use client';

import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { getComments } from '@/shared/services';
import { CommentObjData } from '@/interfaces';
import { formatDate } from '@/shared/utils/formatDate';

interface CommentsProps {
  slug: string;
}

export const Comments = ({ slug }: CommentsProps) => {
  const [comments, setComments] = useState<CommentObjData[]>();

  useEffect(() => {
    void getComments(slug).then((result: CommentObjData[]) =>
      setComments(result)
    );
  }, [slug]);

  return (
    <>
      {comments && comments.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length > 1 ? `${comments.length} Comments` : '1 Comment'}
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-200 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {formatDate(comment.createdAt)}
              </p>
              <p className="whitespace-pre-line text-accent w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
