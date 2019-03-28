# flex布局
## display:flex;
webkit内核必须使用：display: -webkit-flex;
- step1：说明，一些名称 flex容器 flex项目 主轴 交叉轴；

- step2：容器其它css属性：
flex-direction：
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。

- step3：flex-wrap
nowrap（默认）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。
- step4：flex-flow以上两个属性的组合 flex-flow: <flex-direction> || <flex-wrap>;

- step5：justify-content属性定义了项目在主轴上的对齐方式
justify-content: flex-start | flex-end | center | space-between | space-around;
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

- step6：align-items属性定义项目在交叉轴上如何对齐。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

- step7：align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。

- step8：项目的属性
order：<integer>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0；
flex-grow：<number>属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大；
flex-shrink：<number>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小；
flex-basis：<length> | auto;属性定义了在分配多余空间之前，项目占据的主轴空间（main size）；
flex：none |  <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto；
align-self：auto | flex-start | flex-end | center | baseline | stretch;align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性；



