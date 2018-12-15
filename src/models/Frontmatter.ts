interface Frontmatter {
  path: string;
  date: string;
  title: string;
  category: string;
  tags: string[];
  banner?: string;
}

export default Frontmatter;
