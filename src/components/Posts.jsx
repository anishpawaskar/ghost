import React from 'react'
import { PostCard } from './PostCard'
import "./postsStyle.css"

export const Posts = () => {
    const postData = [
        {
            title: "Wrting posts with Ghosts",
            imgUrl: "https://wallpaperaccess.com/full/1519396.jpg",
            des: "Discover familar formating optins in a functional toolbar and the ability to add dynamic content seamlessly.",
            postTime: "3 min read",
        },
        {
            title: "Publishing options",
            imgUrl: "https://wallpaperaccess.com/full/152253.jpg",
            des: "The Ghost neditor post setting menu has everything you need to fully optimise and distribute your content effectively.",
            postTime: "5 min read",
        },
        {
            title: "Managing admin settings",
            imgUrl: "https://wallpaperaccess.com/full/2743697.png",
            des: "There are a couple ofthings to do next while you're getting set up; making your site private and inviting your team.",
            postTime: "10 min read",
        }
    ]

    const renderPosts = () => {
        return (
            postData.map((post, idx) => {
                return <PostCard key = {idx} title = {post.title} imgUrl = {post.imgUrl} des = {post.des} postTime = {post.postTime} />
            })
        )
    }
  return (
    <div className='posts'>
        {renderPosts()}
    </div>
  )
}
