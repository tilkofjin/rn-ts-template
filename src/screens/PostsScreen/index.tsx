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
import { useAppDispatch, useAppSelector } from "stores/store/storeHooks";
import { setPosts } from "stores/reducers/Posts";
import { ScrollView } from "react-native-gesture-handler";

const Separator = () => <View style={styles.separator} />;

const PostsScreen: FC<RootStackScreenProps<"Posts">> = () => {
  const [addPost] = useAddPostMutation();
  const [getPostsById] = useLazyGetPostsByIdQuery();
  const [modifyPostById] = useModifyPostByIdMutation();
  const [deletePostById] = useDeletePostByIdMutation();
  const [getPostsList] = useLazyGetPostsListQuery();
  const postState = useAppSelector((state) => state.posts.list);
  const dispatch = useAppDispatch();

  const getList = async () => {
    const { data, isSuccess } = await getPostsList();
    if (isSuccess) {
      dispatch(setPosts(data?.posts));
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Posts page</Text>
      <Separator />
      <Button
        title="add post"
        color="#f194ff"
        onPress={async () => await addPost({ id: 1 })}
      />
      <Separator />
      <Button
        title="get posts"
        color="#f194ff"
        onPress={async () => {
          const { data } = await getPostsById(1);
          console.log("🚀 ~ file: index.tsx ~ line 46 ~ res", data);
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
      <Separator />
      <ScrollView style={styles.scrollBox}>
        <Text>{JSON.stringify(postState)}</Text>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollBox: {
    flex: 1,
    margin: 10
  },
});
