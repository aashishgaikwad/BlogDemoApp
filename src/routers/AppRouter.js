import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ListPosts from '../components/ListPosts';
import ViewPost from '../components/ViewPost';
import AddNewPost from '../components/AddNewPost';
import EditPost from '../components/EditPost';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ListPosts} />
				<Route exact path="/post/:id" component={ViewPost} />
				<Route exact path="/addPost" component={AddNewPost} />
				<Route exact path="/editPost/:id" component={EditPost} />
				<Redirect to="/" />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
