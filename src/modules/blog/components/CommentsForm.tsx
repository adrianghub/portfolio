import { useEffect, useRef, useState } from 'react';
import { submitComment } from 'shared/services';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';

interface CommentsFormProps {
  slug: string;
}

export const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<
    boolean | null
  >();
  const commentElRef = useRef<HTMLTextAreaElement | null>(null);
  const nameElRef = useRef<HTMLInputElement | null>(null);
  const emailElRef = useRef<HTMLInputElement | null>(null);
  const storeDataElRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let name: string | null | undefined = nameElRef?.current?.value;
    let email: string | null | undefined = emailElRef?.current?.value;

    if (name && email) {
      name = window.localStorage.getItem('name');
      email = window.localStorage.getItem('email');
    }
  }, []);

  const handleSubmitComment = async () => {
    setError(false);

    const comment = commentElRef?.current?.value;
    const name = nameElRef?.current?.value;
    const email = emailElRef?.current?.value;
    const storeData = storeDataElRef?.current?.checked;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    await submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        Leave a comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <Input
          textareaRef={commentElRef}
          classes="p-4"
          placeholder="Comment"
          name="comment"
          textarea
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Input
          ref={nameElRef}
          classes="p-2 px-4"
          placeholder="Name"
          name="name"
        />
        <Input
          ref={emailElRef}
          classes="p-2 px-4"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <Input
            ref={storeDataElRef}
            id="storeData"
            name="storeData"
            type="checkbox"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-400">All fields are required.</p>
      )}
      <div className="mt-8">
        <Button type="button" onClick={() => void handleSubmitComment()}>
          Send
        </Button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-300">
            Comment submitted for review!
          </span>
        )}
      </div>
    </div>
  );
};
