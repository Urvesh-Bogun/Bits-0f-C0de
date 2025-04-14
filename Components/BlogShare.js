import { FaLinkedin } from "react-icons/fa";

function BlogShare({ data }) {
  const postUrl = `https://sudo-rm-rf-blog.vercel.app/blogs/${String(
    data.Title.split(" ").join("-").toLowerCase()
  )}`;

  return (
    <>
      <div className="text-center pb-4">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <FaLinkedin />
          <a
            className="linkedin-share-button"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              postUrl
            )}`}
          >
            Share
          </a>
        </button>
      </div>
    </>
  );
}

export default BlogShare;
