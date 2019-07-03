declare module Giphy {
  interface GIF {
    type: string;
    id: string;
    slug: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    rating: string;
    user: Giphy.User;
    source_tld: string;
    source_post_url: string;
    update_datetime: string;
    create_datetime: string;
    import_datetime: string;
    trending_datetime: string;
    images: {};
    title: string;
  }
  interface User {
    avatar_url: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
  }
  interface Pagination {
    offset: number;
    total_count: number;
    count: number;
  }
  interface Meta {
    msg: string;
    status: number;
    response_id: string;
  }
  interface Request {
    api_key: string;
    q: string;
    limit?: number;
    offset?: number;
    rating?: string;
    lang?: string;
    random_id?: string;
  }
  interface Response {
    data: Giphy.GIF[];
    pagination: Giphy.Pagination;
    meta: Giphy.Meta;
  }
}
