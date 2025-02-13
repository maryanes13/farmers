import React from "react";
import Title, { TitleLevel, TitleSize } from "../../ui/title/title";
import { Text, StyledSection, TextWrapper } from "./styles";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой на дом
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
