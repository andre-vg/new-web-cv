import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ColorInfoType {
  hex: Hex;
  rgb: Rgb;
  hsl: Hsl;
  hsv: Hsv;
  name: Name;
  cmyk: Cmyk;
  XYZ: Xyz;
  image: Image;
  contrast: Contrast;
}

export interface Hex {
  value: string;
  clean: string;
}

export interface Rgb {
  fraction: Fraction;
  r: number;
  g: number;
  b: number;
  value: string;
}
export interface Image {
  bare: string;
  named: string;
}

export interface Contrast {
  value: string;
}


export interface Fraction {
  r: number;
  g: number;
  b: number;
}

export interface Hsl {
  fraction: Fraction2;
  h: number;
  s: number;
  l: number;
  value: string;
}

export interface Fraction2 {
  h: number;
  s: number;
  l: number;
}

export interface Hsv {
  fraction: Fraction3;
  value: string;
  h: number;
  s: number;
  v: number;
}

export interface Fraction3 {
  h: number;
  s: number;
  v: number;
}

export interface Name {
  value: string;
  closest_named_hex: string;
  exact_match_name: boolean;
  distance: number;
}

export interface Cmyk {
  fraction: Fraction4;
  value: string;
  c: number;
  m: number;
  y: number;
  k: number;
}

export interface Fraction4 {
  c: number;
  m: number;
  y: number;
  k: number;
}

export interface Xyz {
  fraction: Fraction5;
  value: string;
  X: number;
  Y: number;
  Z: number;
}

export interface Fraction5 {
  X: number;
  Y: number;
  Z: number;
}

export interface Projeto {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}
