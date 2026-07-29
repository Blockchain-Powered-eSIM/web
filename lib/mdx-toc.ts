import { visit } from "unist-util-visit";
import { toString as hastToString } from "hast-util-to-string";
import type { Element, Root } from "hast";
import type { VFile } from "vfile";

export interface TocHeading {
  id: string;
  text: string;
}

/**
 * Runs after rehype-slug in the pipeline, so headings already have ids.
 * Stashes the H2 list on file.data.matter, next-mdx-remote's generic
 * side-channel for returning computed data from compileMDX().
 */
export function rehypeCollectH2Toc() {
  return (tree: Root, file: VFile) => {
    const headings: TocHeading[] = [];
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "h2" && typeof node.properties?.id === "string") {
        headings.push({ id: node.properties.id, text: hastToString(node) });
      }
    });
    file.data.matter = { headings };
  };
}
