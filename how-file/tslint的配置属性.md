## ����˵��
- ���Ŀ¼�µ�tslint�ļ���

- rulesDirectory?: string | string[], //����Ŀ¼��ָ����У������ļ���Ŀ¼��
- "extends"?: string | string[], //��������Ԥ�����ƣ�һ�������ٷ��Ƽ���ֵ����ֵ��Ϊ�ȶ�:tslint:recommended��
- "rules"?: {[name: string]: RuleSetting}, //��������,���õ���Щ����Ӧ�õ�.ts��.tsx�ļ��С����������һ�����󣬶����а����������ԣ�options?: any, severity?: 'default' | 'error' | 'warning' | 'off'������options��һ�������趨ֵ�����顣����Ҳ���Խ�����һ������ֵ������Ҳ������һ�����顣
- "jsRules"?: any, //������趨ͬrules��ֻ�����趨����Щ����Ӧ����.js��.jsx�ļ���
- "defaultSeverity"?: "error" | "warning" | "off" //���д���ʱ��Ĭ����ʾ�����س̶ȣ��˴����õ���ʾ����Ӧ�������й���
