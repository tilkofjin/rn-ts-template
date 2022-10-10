import { api } from 'services/api'

interface Post {
  id: number
  name: string
}
type PostsResponse = Post[]

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    // getList
    getPostsList: build.query<Promise<Post[]>, void>({
      query: () => '/posts',
      transformResponse: (response: { result: Promise<Post[]> }) => {
        return response.result;
      },
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
} = loginApi;
export default loginApi;

