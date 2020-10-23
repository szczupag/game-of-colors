(this["webpackJsonpgame-of-colors"]=this["webpackJsonpgame-of-colors"]||[]).push([[0],[,,,,function(e,r,t){e.exports={root:"GameSetupRow_root__1qVjn",controls:"GameSetupRow_controls__1Z3pZ",value:"GameSetupRow_value__2fP8k",button:"GameSetupRow_button__3vu9Q"}},,function(e,r,t){e.exports={gameControls:"Controls_gameControls__1NYQo",scoreWrapper:"Controls_scoreWrapper__2sh_p",score:"Controls_score__1Snv9"}},function(e,r,t){e.exports={root:"GameOverModal_root__VILyJ",modalWrapper:"GameOverModal_modalWrapper__1aJ8e",text:"GameOverModal_text__3IgAV"}},,,,function(e,r,t){e.exports={root:"GameSetup_root__2qrI7",innerWrapper:"GameSetup_innerWrapper__IeGWX"}},function(e,r,t){e.exports={root:"App_root__1Jh3p",title:"App_title__1YcTA"}},function(e,r,t){e.exports={row:"TilesArray_row__3-eyP",wrapper:"TilesArray_wrapper__1XExh"}},,,,function(e,r,t){e.exports={button:"Button_button__3QF_k"}},function(e,r,t){e.exports={tile:"Tile_tile__3l9S8"}},function(e,r,t){e.exports={root:"GameBoard_root__FH6Kl"}},function(e,r,t){e.exports=t(32)},,,,,function(e,r,t){},,,,,,,function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(5),c=t.n(a),l=(t(25),t(1)),u=t(4),s=t.n(u),i=function(e){var r=e.label,t=e.value,n=e.onDecrement,a=e.onIncrement;return o.a.createElement("div",{className:s.a.root},o.a.createElement("span",null,r),o.a.createElement("div",{className:s.a.controls},o.a.createElement("button",{className:s.a.button,onClick:n},"-"),o.a.createElement("span",{className:s.a.value},t),o.a.createElement("button",{className:s.a.button,onClick:a},"+")))},m=t(3),f={rows:5,columns:12,colors:5,isStarted:!1},p=Object(m.b)({name:"gameSetup",initialState:f,reducers:{incrementRows:function(e){e.rows+=1},decrementRows:function(e){e.rows>1&&(e.rows-=1)},incrementColumns:function(e){e.columns+=1},decrementColumns:function(e){e.columns>1&&(e.columns-=1)},incrementColors:function(e){e.colors+=1},decrementColors:function(e){e.colors>1&&(e.colors-=1)},startGame:function(e){e.isStarted=!0},resetSetup:function(){return f}}}),d=p.actions,v=d.incrementRows,_=d.decrementRows,b=d.incrementColumns,C=d.decrementColumns,E=d.incrementColors,g=d.decrementColors,y=d.startGame,S=d.resetSetup,w=function(e){return e.gameSetup.rows},h=function(e){return e.gameSetup.columns},O=function(e){return e.gameSetup.colors},k=function(e){return e.gameSetup.isStarted},A=p.reducer,j=t(11),N=t.n(j),G=t(17),x=t.n(G),B=function(e){var r=e.label,t=e.onClick;return o.a.createElement("button",{className:x.a.button,onClick:t},r)},M=function(){var e=Object(l.c)(w),r=Object(l.c)(h),t=Object(l.c)(O),n=Object(l.b)();return o.a.createElement("div",{className:N.a.root},o.a.createElement("div",{className:N.a.innerWrapper},o.a.createElement(i,{label:"Rows",value:e,onDecrement:function(){return n(_())},onIncrement:function(){return n(v())}}),o.a.createElement(i,{label:"Columns",value:r,onDecrement:function(){return n(C())},onIncrement:function(){return n(b())}}),o.a.createElement(i,{label:"Colors",value:t,onDecrement:function(){return n(g())},onIncrement:function(){return n(E())}}),o.a.createElement(B,{onClick:function(){return n(y())},label:"Start"})))},T=t(12),W=t.n(T),I=t(14),R=function(e,r,t){var n=e[r][t];return r>0&&e[r-1][t]===n||(r<e.length-1&&e[r+1][t]===n||(t>0&&e[r][t-1]===n||t<e[0].length-1&&e[r][t+1]===n))},J=function(e){return!e.some((function(r,t){return r.some((function(r,n){return R(e,t,n)}))}))},D=function(e,r){var t=e.array,n=e.updatedColorsArray,o=e.colors,a=e.targetColor,c=r.row,l=r.col;if(c===t.length-1||t[c+1][l]!==a){for(var u=1;c-u>=0&&n[c-u][l]===a;)u+=1;for(var s=c;s>=0;s--){var i=s-u;n[s][l]=i>=0?t[i][l]:Math.floor(Math.random()*o)}}},Q=function(e,r){return Array.from({length:e},(function(){return Array.from({length:r},(function(){return!1}))}))},V=function(e,r){var t=e.array,n=e.visitedArray,o=e.targetColor,a=r.row,c=r.col;n[a][c]||(n[a][c]=!0,t[a][c]===o&&(e.score+=1,e.score=function(e,r){var t=e.array,n=r.row,o=r.col,a=t.length-1,c=t[0].length-1;return n>0&&(e.score=V(e,{row:n-1,col:o})),n<a&&(e.score=V(e,{row:n+1,col:o})),o>0&&(e.score=V(e,{row:n,col:o-1})),o<c&&(e.score=V(e,{row:n,col:o+1})),e.score}(e,r),D(e,r)));return e.score},q=function(e,r,t,n){if(!R(t,e,r))return{score:0,updatedColorsArray:t};var o=Q(t.length,t[0].length),a=t.map((function(e){return e.slice()})),c={array:t,visitedArray:o,updatedColorsArray:a,colors:n,score:0,targetColor:t[e][r]},l=V(c,{row:e,col:r});return{score:l>1?l:0,updatedColorsArray:a}},F={score:0,gameOver:!1},P=Object(m.b)({name:"gameBoard",initialState:F,reducers:{updateScore:function(e,r){e.score+=r.payload},setGameOver:function(e){e.gameOver=!0},resetGame:function(){return F}}}),U=P.actions,X=U.updateScore,Y=U.setGameOver,Z=U.resetGame,H=function(e){return e.gameBoard.score},K=function(e){return e.gameBoard.gameOver},L=P.reducer,z=function(e){var r=e.array,t=e.colors,o=e.setArray,a=e.updateUserScore,c=e.setGameOverStatus;Object(n.useEffect)((function(){r.length>0&&(J(r)&&c())}),[r]);return{onTileClick:function(e,n){var c=q(e,n,r,t),l=c.score,u=c.updatedColorsArray;a(l),o(u)}}},$=function(e){var r,t,n,o=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(r+12*e)%12;return.5-.5*Math.max(Math.min(t-3,9-t,1),-1)};return r=o(0),t=o(8),n=o(4),"#"+[r,t,n].map((function(e){return Math.round(255*e).toString(16).padStart(2,0)})).join("")},ee=function(e,r){return $(r/e)},re=function(e){var r=e.rows,t=e.columns,n=e.colors;return{tilesArray:Array.from({length:r},(function(){return Array.from({length:t},(function(){return Math.floor(Math.random()*n)}))})),colorsArray:Array.from(Array(n).keys()).map((function(e){return ee(n,e)}))}},te=t(18),ne=t.n(te),oe=function(e){var r=e.color,t=e.onTileClick;return o.a.createElement("div",{className:ne.a.tile,onClick:t,style:{backgroundColor:r}})},ae=t(13),ce=t.n(ae),le=function(e){var r=e.array,t=void 0===r?[]:r,n=e.colors,a=e.onTileClick;return o.a.createElement("div",{className:ce.a.wrapper},t.map((function(e,r){return o.a.createElement("div",{key:r,className:ce.a.row},e.map((function(e,t){return o.a.createElement(oe,{key:t,onTileClick:function(){return a(r,t)},color:n[e]})})))})))},ue=t(6),se=t.n(ue),ie=function(e){var r=e.score,t=e.onButtonClick;return o.a.createElement("div",{className:se.a.gameControls},o.a.createElement("div",{className:se.a.scoreWrapper},o.a.createElement("span",null,"Score:"),o.a.createElement("span",{className:se.a.score},r)),o.a.createElement(B,{onClick:t,label:"Back to home"}))},me=t(7),fe=t.n(me),pe=function(e){var r=e.visible,t=e.onButtonClick;return r?o.a.createElement("div",{className:fe.a.root},o.a.createElement("div",{className:fe.a.modalWrapper},o.a.createElement("span",{className:fe.a.text},"There are no more possible moves!"),o.a.createElement(B,{onClick:t,label:"Back to home"}))):null},de=t(19),ve=t.n(de),_e=function(){var e=Object(l.c)(w),r=Object(l.c)(h),t=Object(l.c)(O),a=Object(l.c)(H),c=Object(l.c)(K),u=Object(l.b)(),s=Object(n.useState)([]),i=Object(I.a)(s,2),m=i[0],f=i[1],p=Object(n.useState)([]),d=Object(I.a)(p,2),v=d[0],_=d[1],b=function(){u(S()),u(Z())};Object(n.useEffect)((function(){var n=re({rows:e,columns:r,colors:t}),o=n.tilesArray,a=n.colorsArray;f(o),_(a)}),[]);var C=z({array:m,setArray:f,updateUserScore:function(e){return u(X(e))},setGameOverStatus:function(){return u(Y())},colors:t}).onTileClick;return o.a.createElement("div",{className:ve.a.root},o.a.createElement(ie,{score:a,onButtonClick:b}),o.a.createElement(le,{array:m,colors:v,onTileClick:C}),o.a.createElement(pe,{visible:c,onButtonClick:b}))};var be=function(){var e=Object(l.c)(k);return o.a.createElement("div",{className:W.a.root},o.a.createElement("h1",{className:W.a.title},"Game of colors"),e?o.a.createElement(_e,null):o.a.createElement(M,null))},Ce=Object(m.a)({reducer:{gameSetup:A,gameBoard:L}});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:Ce},o.a.createElement(be,null))),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.89ef0c16.chunk.js.map