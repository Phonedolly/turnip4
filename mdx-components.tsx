import type { MDXComponents } from "mdx/types";

import H1 from "@/components/mdx/h1";
import H2 from "@/components/mdx/h2";
import H3 from "@/components/mdx/h3";
import H4 from "@/components/mdx/h4";
import H5 from "@/components/mdx/h5";
import H6 from "@/components/mdx/h6";
import A from "@/components/mdx/a";
import P from "@/components/mdx/p";
import UL from "@/components/mdx/ul";
import OL from "@/components/mdx/ol";
import LI from "@/components/mdx/li";
import Code from "@/components/mdx/code";
import Pre from "@/components/mdx/pre";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: A,
    p: P,
    ul: UL,
    ol: OL,
    li: LI,
    code: Code,
    pre: Pre,
  };
}