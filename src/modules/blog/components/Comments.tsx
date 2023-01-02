/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import moment from 'moment';
import { getComments } from 'shared/services';
import { CommentObjData } from 'interfaces';

interface CommentsProps {
  slug: string;
}

export const Comments = ({ slug }: CommentsProps) => {
  const [comments, setComments] = useState<CommentObjData[]>();

  useEffect(() => {
    void getComments(slug).then((result: CommentObjData[]) =>
      setComments(result)
    );
  }, []);

  return (
    <>
      {comments && comments.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-200 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-700 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
