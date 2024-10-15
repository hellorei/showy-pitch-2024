"use client";

import type { MDXComponents } from "mdx/types";
import AnimatedNumber from "./AnimatedNumber";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.

    div: (props: any) => <div {...props} />,

    card: (props: any) => (
      <div className="rounded-xl bg-black/50 dark:bg-white/50 p-4 shadow-md">
        {props.children}
      </div>
    ),

    AnimatedNumber: (props: any) => <AnimatedNumber value={props.value} />,
    ...components,
  };
}
