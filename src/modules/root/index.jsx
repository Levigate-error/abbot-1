import React, {useCallback, useMemo, useState} from "react";
import { Container } from "../container/container.jsx";
import { Content } from "../content/content.jsx";
import { Anamez } from "../pages/anamez.jsx";

const Root = () => {
  const [visitIndex, setVisitIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const pagesMap = {
    visit1: {
      anamnez: {
        component: <Anamez setVisitIndex={setVisitIndex} setPageIndex={setPageIndex} />,
        subArticlesItems: [
          { title: "ИМТ", text: "индекс массы тела" },
          { title: "АД", text: "артериальное давление" },
          { title: "АГ", text: "артериальная гипертензия " },
          { title: "ЧКВ", text: "чрескожные коронарные вмешательства" },
          { title: "ПМЖА", text: "передняя межжелудочковой артерия" },
        ]
      }
    }
  };

  const goPreviousPage = useCallback(() => {
    if (pageIndex > 0) {
      setPageIndex((prevState) => prevState - 1);
    } else {
      setVisitIndex((prevState) => prevState - 1);
      setPageIndex(0);
    }
  }, [pageIndex]);

  const getCurrentVisit = (visitIndex) => {
    return Object.values(pagesMap)[visitIndex];
  };

  const getCurrentPage = (visitIndex, pageIndex) => {
    return Object.values(getCurrentVisit(visitIndex))[pageIndex];
  };

  const currentPage = useMemo(() => getCurrentPage(visitIndex, pageIndex), [pageIndex, visitIndex]);

  return (
    <div className="page">
      <Container subArticlesItems={currentPage.subArticlesItems}>
        <Content>{currentPage.component}</Content>
      </Container>
    </div>
  )
};

export default Root;