// IMPORT COMPONENTS
import { IconOptionsComponent } from './icon-options/icon-options.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarFollowComponent } from './sidebar-follow/sidebar-follow.component';
import { TitleH1Component } from './title-h1/title-h1.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

export const components : any[] = [
    TitleH1Component,
    IconOptionsComponent,
    TweetBoxComponent,
    PostsComponent,
    SidebarFollowComponent
];

// EXPORT ALL COMPONENTS
export * from './title-h1/title-h1.component';
export * from './icon-options/icon-options.component';
export * from './tweet-box/tweet-box.component';
export * from './posts/posts.component';
export * from './sidebar-follow/sidebar-follow.component';