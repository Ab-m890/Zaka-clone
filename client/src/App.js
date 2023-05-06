import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from "react-router-dom";

//axios
import { axiosInstance } from "./config/Axios";

//react query
import { QueryClientProvider, QueryClient } from 'react-query'

//pages
import Root from "./Root";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Courses from "./pages/courses";
import Bootcamp from "./pages/bootcamp";
import Ceritification from "./pages/ceritification";
import AboutUs from "./pages/about-us";
import Settings from "./pages/settings";
import NotFound from "./pages/404";
import Login from "./pages/login"
import Register from "./pages/register"
import Test from "./pages/test"

//error
import Error from "./pages/error";

//admin
import AdminHome from "./pages/admin";
import AdminLogin from "./pages/admin/login";
import AdminIsVerifyed from "./pages/admin/admin-is-verified";
import AdminCourses from "./pages/admin/courses";
import AddCourse from "./pages/admin/courses/add";

function App() {
  const queryClient = new QueryClient()
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="bootcamp" element={<Bootcamp />} />
        <Route
          path="ceritification"
          element={<Ceritification />}
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="settings" element={<Settings />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route
          element={<AdminIsVerifyed />}
          path="/"
          loader={
            async () => {
              const { data } = await axiosInstance.post('/api/admin')
              return data
            }
          }
        >
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/courses" element={<AdminCourses />}
          />
          <Route path="admin/courses/add" element={<AddCourse />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  // const routes = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Root />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: 'dashboard',
  //         element: <Dashboard />,
  //       },
  //       {
  //         path: 'profile',
  //         element: <Profile />,
  //       },
  //       {
  //         path: 'courses',
  //         element: <Courses />,
  //       },
  //       {
  //         path: 'bootcamp',
  //         element: <Bootcamp />,
  //       },
  //       {
  //         path: 'ceritification',
  //         element: <Ceritification />,
  //       },
  //       {
  //         path: 'about-us',
  //         element: <AboutUs />,
  //       },
  //       {
  //         path: 'settings',
  //         element: <Settings />,
  //       },
  //       {
  //         path: 'admin/login',
  //         element: <AdminLogin />,
  //       },
  //       {
  //         path: 'admin',
  //         element: <AdminIsVerifyed />,
  //         loader: async () => {
  //           const { data } = await axiosInstance.post('/api/admin')
  //           return data
  //         },
  //         children: [
  //           {
  //             index: true,
  //             element: <AdminHome />,
  //           },
  //           {
  //             path: 'courses',
  //             children: [
  //               {
  //                 index: true,
  //                 element: <AdminCourses />,
  //                 loader: async () => {
  //                   const { data } = await axiosInstance.get('/api/courses')
  //                   return data
  //                 },
  //               },
  //               {
  //                 path: 'add',
  //                 element: <AddCourse />
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         path: 'error',
  //         element: <Error />
  //       },
  //       {
  //         path: '*',
  //         element: <NotFound />,
  //       }

  //     ]
  //   }
  // ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
}

export default App;