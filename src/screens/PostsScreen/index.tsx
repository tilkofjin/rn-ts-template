import { Button, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect } from "react";
import {
  useAddPostMutation,
  useLazyGetPostsByIdQuery,
  useLazyGetPostsListQuery,
  useDeletePostByIdMutation,
  useModifyPostByIdMutation,
} from "services/modules/Login";
import { RootStackScreenProps } from "src/types";

const Separator = () => <View style={styles.separator} />;

const PostsScreen: FC<RootStackScreenProps<"Posts">> = () => {
  const [addPost] = useAddPostMutation();
  const [getPostsById] = useLazyGetPostsByIdQuery();
  const [modifyPostById] = useModifyPostByIdMutation();
  const [deletePostById] = useDeletePostByIdMutation();
  const [getPostsList, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetPostsListQuery();

  console.log(
    "🚀 ~ file: index.tsx ~ line 12 ~ route",
    data,
    isSuccess,
    isLoading,
    isFetching,
    error
  );

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Posts page</Text>
      <Button
        title="add post"
        color="#f194ff"
        onPress={async() => await addPost({ id: 1 })}
      />
      <Separator />
      <Button
        title="get posts"
        color="#f194ff"
        onPress={async () => {
          const res = await getPostsById(1);
          console.log("🚀 ~ file: index.tsx ~ line 46 ~ res", res);
        }}
      />
      <Separator />

      <Button
        title="delete post"
        color="#f194ff"
        onPress={async () => {
          const res = await deletePostById(1);
          console.log("🚀 ~ file: index.tsx ~ line 54 ~ res", res);
        }}
      />
      <Separator />

      <Button
        title="patch post"
        color="#f194ff"
        onPress={async () => {
          const res = await modifyPostById({ id: 1, body: { desc: "test" } });
          console.log("🚀 ~ file: index.tsx ~ line 62 ~ res", res);
        }}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
