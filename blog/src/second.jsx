import React from "react";  
import "./first.css"; 
import Post from "./first.jsx"; 
const Posts = () => { const blogPosts = [ 
{ 
title: "JAVASCRIPT", 
body: `JavaScript is the world most popular lightweight, interpreted compiled programming 
language. It is also known as scripting language for web pages. It is well-known for 
the development of web pages, many non-browser environments also use it. JavaScript can 
be 
used for Client-side developments as well as Server-side developments`, 
author: "Nishant Singh ", imgUrl: 
"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png", 
}, 
{ 
title: "Data Structure ", 
body: `There are many real-life examples of 
a stack. Consider an example of plates stacked over one another in the canteen. The plate 
which is at the top is the first one to be removed, i.e. the plate which has been placed at the 
bottommost position remains in the stack for the longest period of time. So, it 
can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.`, author: 
"Suresh Kr", 
imgUrl: 
"https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png", 
}, 
{ 
title: "Algorithm", 
body: `The word Algorithm means “a process or set of rules to be followed in calculations 
or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions 
that step-by-step define how a work is to be executed upon in order to get the expected 
results. `, 
author: "Monu Kr", imgUrl: 
"https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png", 
}, 
{ 
title: "Computer Network", 
body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.", 
author: "Sonu Kr", imgUrl: 
"https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png", 
},
];
return ( 
<div className="posts-container"> 
{blogPosts.map((post, index) => ( 
<Post  index={index} post={post} /> 
))} 
</div> 
); 
};      
export default Posts;