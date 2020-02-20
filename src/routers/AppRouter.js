import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ListPosts from '../components/ListPosts';
import NotFoundPage from '../components/NotFoundPage';
import ViewPost from '../components/ViewPost';
import AddNewPost from '../components/AddNewPost';
import EditPost from '../components/EditPost';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ListPosts} />
				<Route path="/post/:id" component={ViewPost} />
				<Route path="/addPost" component={AddNewPost} />
				<Route path="/editPost/:id" component={EditPost} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
