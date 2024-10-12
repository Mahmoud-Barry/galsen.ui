"use client"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface RemoteMdxWrapperProps {
  mdxSource: MDXRemoteSerializeResult; // The serialized MDX content
}

const RemoteMdxWrapper: React.FC<RemoteMdxWrapperProps> = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default RemoteMdxWrapper;
