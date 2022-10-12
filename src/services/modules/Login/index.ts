import { api } from 'services/api'

export interface Post {
  id: number
  name: string
}
export type PostsResponse = Post[]

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getList
    getPostsList: build.query<Record<string,any>, void>({
      query: () => '/posts',
    }),
    // add
    addPost: build.mutation<PostsResponse, Partial<Post>>({
      query: (body) => ({
        url: `/posts`,
        method: 'POST',
        body,
      }),
    }),
    getPostsById: build.query<{ id: number }, number>({
      query: (id) => `/posts/${id}`,
    }),
    // delete
    deletePostById: build.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
    // patch
    modifyPostById: build.mutation({
      query: ({ id, body }: { id: number; body: any }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body,
      }),
    })
  }),
  overrideExisting: false,
})

//基于定义的 endpoints 自动生成
export const {
  useAddPostMutation,
  useModifyPostByIdMutation,
  useDeletePostByIdMutation,
  // lazy query
  useLazyGetPostsListQuery,
  useLazyGetPostsByIdQuery,
} = postApi;
export default postApi;

