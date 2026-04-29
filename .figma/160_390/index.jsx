import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.sectionComparisonTab}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <p className={styles.text}>免费版与专业版功能对比&nbsp;</p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.text2}>
            从基础运营到增长经营，按你的业务阶段选择更适合的版本。&nbsp;
          </p>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.tableRow}>
          <div className={styles.headerCell}>
            <p className={styles.text3}>功能特性</p>
          </div>
          <div className={styles.headerCell2}>
            <p className={styles.text3}>免费版</p>
          </div>
          <div className={styles.headerCell3} />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableCell}>
            <p className={styles.text4}>渠道管理</p>
          </div>
          <div className={styles.tableRow2}>
            <div className={styles.tableCell2}>
              <p className={styles.text5}>协议渠道&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow3}>
            <div className={styles.tableCell4}>
              <p className={styles.text5}>高价值渠道&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableRow4}>
            <div className={styles.tableCell6}>
              <p className={styles.text5}>GDS渠道&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow2}>
            <div className={styles.tableCell2}>
              <p className={styles.text5}>预订管理&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableCell7}>
            <p className={styles.text4}>洞察</p>
          </div>
          <div className={styles.tableRow2}>
            <div className={styles.tableCell2}>
              <p className={styles.text5}>预订表现&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow5}>
            <div className={styles.tableCell8}>
              <p className={styles.text5}>客户画像分析&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableRow5}>
            <div className={styles.tableCell8}>
              <p className={styles.text5}>客户预订分布&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableRow6}>
            <div className={styles.tableCell2}>
              <p className={styles.text5}>调价建议&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableCell}>
            <p className={styles.text4}>直客预订</p>
          </div>
          <div className={styles.tableRow6}>
            <div className={styles.tableCell2}>
              <p className={styles.text5}>预订官网&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableRow7}>
            <div className={styles.tableCell9}>
              <p className={styles.text5}>酒店网站建设工具&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell5}>
              <p className={styles.a3}>—</p>
            </div>
          </div>
          <div className={styles.tableCell}>
            <p className={styles.text4}>生态系统</p>
          </div>
          <div className={styles.tableRow4}>
            <div className={styles.tableCell6}>
              <p className={styles.text5}>PMS集成&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow8}>
            <div className={styles.tableCell8}>
              <p className={styles.text5}>酒店应用商店&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableCell10}>
            <p className={styles.text4}>支持与安全</p>
          </div>
          <div className={styles.tableRow9}>
            <div className={styles.tableCell11}>
              <p className={styles.text5}>A-Pay 支付处理&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow10}>
            <div className={styles.tableCell12}>
              <p className={styles.text5}>
                24小时在线客服、电话和电子邮件支持&nbsp;
              </p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow11}>
            <div className={styles.tableCell13}>
              <p className={styles.text5}>符合PCI DSS和GDPR标准&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <div className={styles.tableCell3}>
              <p className={styles.a2}>✓</p>
            </div>
          </div>
          <div className={styles.tableRow12}>
            <div className={styles.tableCell14}>
              <p className={styles.text5}>全天候系统监控&nbsp;</p>
              <div className={styles.text6}>
                <p className={styles.a}>?</p>
              </div>
            </div>
            <p className={styles.a4}>✓</p>
          </div>
          <div className={styles.frame2131332292}>
            <p className={styles.text7}>协议渠道</p>
            <p className={styles.text8}>
              这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍这里是协议渠道文字介绍
            </p>
          </div>
        </div>
        <div className={styles.tableCell15} />
      </div>
    </div>
  );
}

export default Component;
