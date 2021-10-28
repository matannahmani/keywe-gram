import {axios} from "../lib/common"
import { Avatar, Box, HStack, ScrollView, Spinner } from "native-base"
import React, { useEffect, useState } from "react"
import Post from "../components/Post"
import StoryAvatar from "../components/StoryAvatar"

const Home = () => {
    const [posts,setPosts] = useState([]);
    const [stories,setStories] = useState([]);
    const [isLoading,setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const request = await axios.get('/users/all');
            if (request.status === 200)
            {
                setPosts(request.data.posts)
                setStories(request.data.stories)
            }
            setLoading(false);
        }
        fetchPosts()
    }, [])

    return (
        <Box>
        <ScrollView
        horizontal
        pt="2"
        pb="2"
        bg="white"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        >
        {stories.length > 0 && stories.map(e => 
        <StoryAvatar img={e.photo} key={e.id}/>
        )}
        </ScrollView>
        <ScrollView
        h="100%"
        >
        {posts.length === 0 && isLoading &&
        <Spinner size="lg"/>
        }
        {posts.length > 0 && posts.map(p => 
        <Post key={p.id} name={p.description} pSource={p.photo}/>
        )}
        </ScrollView>
        </Box>
    )
}

export default Home