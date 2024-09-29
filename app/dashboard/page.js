'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import NavBar from '../../comps/Nav';

const businesses = [
  { id: 1, name: "Zingerman's Delicatessen", address: '422 Michigan Ave, Ann Arbor, MI', imageUrl: "https://www.zingermansdeli.com/app/uploads/2022/04/14_03_2_Zingermans_Reuben2-1024x683.jpg", food: "Corned Beef Sandwiches", description: 'Fresh organic meals.' },
  { id: 2, name: 'Frita Batidos', address: "117 W Washington St, Ann Arbor, MI", imageUrl: "https://clovereats.com/wp-content/uploads/2014/07/fritabatidos-10.jpg?w=1545", food: "Fried Egg Burgers", description: 'Delicious baked goods.' },
  { id: 3, name: "Sava's", address: "211 S State St, Ann Arbor, MI", imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/TMFUpSyGXoKM_QnJVvVbRQ/348s.jpg", food: "Truffle Fries", description: 'Great coffee and pastries.' },
];

const posts = [
  { id: 1, type: 'announcement', content: 'Restaurant A donated food to Local Shelter.', timestamp: '2 hours ago' },
  { id: 2, type: 'event', content: 'Bakery B is offering free pastries today!', timestamp: '1 day ago' },
  { id: 3, type: 'reminder', content: 'Cafe C has a surplus of food items, need distribution.', timestamp: '3 days ago' },
];

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-6 py-5">
      <NavBar />

      <div className="container mx-auto">
        <h1 className="mt-16 text-2xl font-bold text-gray-800 mb-4">Nearby businesses</h1>
        <div className="flex space-x-4 items-center mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Gluten/Dairy</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Half-packed</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Fully-packed</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Low-packaged</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses.map((business) => (
            <Card key={business.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="relative h-48">
                <img
                  src={business.imageUrl}
                  alt={business.name}
                  className="object-cover w-full h-full rounded-lg filter brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <h4 className="text-white text-xl font-semibold">{business.name}</h4>
                </div>
              </CardHeader>
              <CardBody className="p-6 relative">
                <p className="text-gray-700 font-medium">{business.address}</p>
                <div className="flex items-center mt-1 gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 395.71 395.71">
                    <g>
                      <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                    </g>
                  </svg>
                  <p className="text-gray-600 text-sm">0.3 miles away</p>
                </div>
                <p className="mt-3 text-gray-600">{business.food}</p>
                {/* Button */}
                <div className="absolute bottom-3 right-3">
                  <Button color="primary" auto shadow>
                    View
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your timeline</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {posts.map((post) => {
            let Icon;
            switch (post.type) {
              case "announcement":
                Icon = (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4v2m-5-6h10m-2 0a2 2 0 100-4 2 2 0 00-4 0m2 4v4m0-4a2 2 0 10-4 0"
                    />
                  </svg>
                );
                break;
              case "event":
                Icon = (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m-1-2a2 2 0 114 0 2 2 0 01-4 0m0 0v4m-2 0a2 2 0 100 4 2 2 0 004 0m0 0a2 2 0 11-4 0"
                    />
                  </svg>
                );
                break;
              case "reminder":
                Icon = (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4v2m-5-6h10m-2 0a2 2 0 100-4 2 2 0 00-4 0m2 4v4m0-4a2 2 0 10-4 0"
                    />
                  </svg>
                );
                break;
              default:
                Icon = (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h10m-5 4h5"
                    />
                  </svg>
                );
            }

            return (
              <div key={post.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 flex items-start">
                <div className="mr-4 mt-1">
                  {Icon}
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-lg">{post.content}</p>
                  <p className="text-gray-500 text-sm mt-2">{post.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
