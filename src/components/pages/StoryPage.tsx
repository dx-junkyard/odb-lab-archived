'use client';
import React, { FC, useState } from 'react';

import './story-page.scss';
import {
  Accordion,
  AccordionDefaultIcon,
  AccordionSummary,
} from '../digital-go-jp/accordion/Accordion';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
} from '../digital-go-jp/breadcrumbs/Breadcrumbs';

type User = {
  name: string;
};

export const StoryPage: FC = () => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Breadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="home">
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="organization">
            組織情報
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="a">
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" key="b">
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className="text-oln-14N-1" isCurrent>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
      </Breadcrumbs>
      <Accordion>
        <AccordionSummary className="p-2">
          <h3>ダミーテキストはどのような場合に使用されますか。</h3>
          <AccordionDefaultIcon />
        </AccordionSummary>
        <div className="px-2 py-4">
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </div>
      </Accordion>
    </article>
  );
};
