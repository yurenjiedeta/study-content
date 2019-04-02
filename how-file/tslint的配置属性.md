## 属性说明
- 详见目录下的tslint文件；

- rulesDirectory?: string | string[], //规则目录，指配置校验规则文件的目录；
- "extends"?: string | string[], //内置配置预设名称，一般采用其官方推荐的值，此值较为稳定:tslint:recommended；
- "rules"?: {[name: string]: RuleSetting}, //规则配置,配置的这些规则将应用到.ts和.tsx文件中。规则可以是一个对象，对象中包含两个属性：options?: any, severity?: 'default' | 'error' | 'warning' | 'off'，其中options是一个包含设定值的数组。规则也可以仅仅是一个布尔值，或者也可以是一个数组。
- "jsRules"?: any, //其规则设定同rules，只不过设定的这些规则将应用于.js和.jsx文件；
- "defaultSeverity"?: "error" | "warning" | "off" //当有错误时，默认提示的严重程度，此处设置的提示，将应用于所有规则；
