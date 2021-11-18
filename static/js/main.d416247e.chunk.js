(this["webpackJsonpdad-jokes-app"]=this["webpackJsonpdad-jokes-app"]||[]).push([[0],{29:function(e,t,s){},31:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var n=s(2),o=s.n(n),a=s(22),i=s.n(a),c=(s(29),s(3)),r=s(4),l=s(6),u=s(5),h=s(13),j=s(11),p=s.n(j),d=s(12),k=s(23),v=s(9),f=(s(31),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#F44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Joke",children:[Object(f.jsxs)("div",{className:"Joke-buttons",children:[Object(f.jsx)("i",{className:"fas fa-arrow-up",onClick:this.props.upvote}),Object(f.jsx)("span",{className:"Joke-votes",style:{borderColor:this.getColor()},children:this.props.votes}),Object(f.jsx)("i",{className:"fas fa-arrow-down",onClick:this.props.downvote})]}),Object(f.jsx)("div",{className:"Joke-text",children:this.props.text}),Object(f.jsx)("div",{className:"Joke-smiley",children:Object(f.jsx)("i",{className:this.getEmoji()})})]})}}]),s}(n.Component),m=b,O=s(24),g=s.n(O),x=(s(51),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(k.a)(p.a.mark((function e(){var t,s,n,o,a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],s=new Set(this.state.jokes.map((function(e){return e.text})));case 3:if(!(t.length<this.props.numJokesToGet)){e.next=11;break}return n={headers:{Accept:"application/json"}},e.next=7,g.a.get("https://icanhazdadjoke.com/",n);case 7:o=e.sent,s.has(o.data.joke)?console.log("FOUND A DUPLICATE!"):t.push({id:o.data.id,text:o.data.joke,votes:0}),e.next=3;break;case 11:console.log(t),this.setState((function(e){return{loading:!1,jokes:[].concat(Object(d.a)(e.jokes),t)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(h.a)(Object(h.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(f.jsxs)("div",{className:"JokeList-spinner",children:[Object(f.jsx)("i",{className:"far fa-8x fa-laugh fa-spin"}),Object(f.jsx)("h1",{className:"JokeList-title",children:"Loading..."})]});var t=Object(d.a)(this.state.jokes).sort((function(e,t){return t.votes-e.votes}));return Object(f.jsxs)("div",{className:"JokeList",children:[Object(f.jsxs)("div",{className:"JokeList-sidebar",children:[Object(f.jsxs)("h1",{className:"JokeList-title",children:[Object(f.jsx)("span",{children:"Dad"})," Jokes"]}),Object(f.jsx)("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),Object(f.jsx)("button",{className:"JokeList-getmore",onClick:this.handleClick,children:"Fetch Jokes"})]}),Object(f.jsx)("div",{className:"JokeList-jokes",children:t.map((function(t){return Object(f.jsx)(m,{text:t.text,votes:t.votes,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}},t.id)}))})]})}}]),s}(n.Component));x.defaultProps={numJokesToGet:10};var J=x,C=(s(52),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(J,{})})}}]),s}(n.Component)),y=C,N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),N()}},[[53,1,2]]]);
//# sourceMappingURL=main.d416247e.chunk.js.map