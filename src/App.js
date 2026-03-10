import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Loading from './components/Loading';
import './assets/css/fontawesome.css';
import './assets/css/font.css';
import './assets/css/style.module.css';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Shipping = lazy(() => import('./pages/Shipping'));

const SuspensePage = (element, fallback = (<Loading/>)) => {
    return (
        <Suspense fallback={fallback}>
            {element}
        </Suspense>
    )
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={SuspensePage(<Home/>)} />
					<Route path="/contact-us" element={SuspensePage(<Contact />)} />
					<Route path="/products" element={SuspensePage(<Products />)} />
					<Route path="/products/:id" element={SuspensePage(<Products />)} />
					<Route path="/shipping-details" element={SuspensePage(<Shipping />)} />
					<Route path="*" element={SuspensePage(<NotFound />)} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;


