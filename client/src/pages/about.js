import React from 'react';
import { Grid, Header, Icon, Segment, List } from 'semantic-ui-react'


const About = () => (
  <Grid centered>
    <Grid.Column width={9}>
    <Segment placeholder>
      <Header icon color='pink'>
        <Icon name='hand peace outline' />
        Привет! 
      </Header>
      <List ordered>
        <List.Item>Ссылка 'Вход' заработает, когда появится ясность с ответственным за наполнение и обновление информации</List.Item>
        <List.Item>если группа проходит в разные дни в разных помещениях, в статистике она отображается как одна группа, в списке групп - как несколько групп (с одинаковым названием и днями недели в скобках)</List.Item>
        <List.Item>поблизости - меньше 5 км</List.Item>
        <List.Item>проект в очень ранней стадии, если у вас есть предложения по его дальнейшему развитию, пишите на <a href="mailto:svirins@gmail.com">svirins@gmail.com</a></List.Item>
      </List>
    </Segment>
    </Grid.Column>
  </Grid> 
  );

export default About;

