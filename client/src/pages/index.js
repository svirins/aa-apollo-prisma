import React, { Fragment, Suspense, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { usePosition } from "use-position";
import { Loader } from "semantic-ui-react";

import Header from "../components/ui-elements/header";
import StatisticBar from "../components/ui-elements/statistic";
import PageContainer from "../components/ui-elements/page-container";
import Footer from "../components/ui-elements/footer";

// lazy loading
const Groups = React.lazy(() => import("./groups"));
const Map = React.lazy(() => import("./map"));
const Events = React.lazy(() => import("./events"));
const FourZeroFour = React.lazy(() => import("./notFound"));
const LoginPage = React.lazy(() => import("./login"));
const About = React.lazy(() => import("./about"));

const Pages = props => {
  const {
    latitude = 53.72,
    longitude = 27.69,
    error = false
  } = usePosition(true, { enableHighAccuracy: true });

  const client = useApolloClient();
  client.writeData({
    data: {
      latitude: latitude,
      longitude: longitude,
      error: error
    }
  });

  const memoizedStatistics = useMemo(()=>(<StatisticBar />)
  ,[])

  const memoizedHeader = useMemo(()=>(<Header />)
  ,[])

  const memoizedFooter = useMemo(()=>(<Footer />)
  ,[])


  return (
    <Fragment>
      {memoizedHeader}
      <PageContainer>
        <Suspense fallback={<Loader active inline="centered" />}>
          <Switch>
            <Route path="/map" render={() => <Map />} />
            <Route path="/events" render={() => <Events />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/" exact render={() => <Groups />} />
            <Route path="*" render={() => <FourZeroFour />} />
          </Switch>
        </Suspense>
        {memoizedStatistics}
      </PageContainer>
      {memoizedFooter}
    </Fragment>
  );
};
export default Pages;
