// import Add from './component/Add';
// import List from './component/List';
// import React from 'react';
// const routes = [{
//     path : '/',
// 	exact : true,
// 	main : ()=> <List />
// },
// {
//     path : 'add',
// 	exact : true,
// 	main : ({history})=> <Add history={history} />
// },
// {
   
// 	path : '/products/:id/edit',
// 	exact : true,
//     main : ({history,match})=> <Add  match ={match} history={history}/>
// }
// ];
// export default routes;
import Add from './component/Add';
import List from './component/List';
import React from 'react';
const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Allproduct/>
},
{
    path : '/add',
	exact : true,
	main : ({history})=> <Add history={history} />
},
{
   
	path : '/products/:id/productdetail',
	exact : true,
    main : ({match})=> <ProductDetail  match ={match}/>
},
{
   
	path : '/sanphamhot',
	exact : true,
    main : ({match})=> <SanPhamHot  match ={match}/>
},
{
	path : '/sanphamkhuyenmai',
	exact : true,
    main : ({match})=> <SanphamKhuyenMai  match ={match}/>
},
{
   
	path : '/sanphammoi',
	exact : true,
    main : ({match})=> <SanPhamMoi  match ={match}/>
},
{
   
	path : '',
	exact : false,
    main : ()=> <NotFound/>
},
];
export default routes;