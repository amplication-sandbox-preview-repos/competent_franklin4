import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KafkaMessageList } from "./kafkaMessage/KafkaMessageList";
import { KafkaMessageCreate } from "./kafkaMessage/KafkaMessageCreate";
import { KafkaMessageEdit } from "./kafkaMessage/KafkaMessageEdit";
import { KafkaMessageShow } from "./kafkaMessage/KafkaMessageShow";
import { ProcessedBlogPostList } from "./processedBlogPost/ProcessedBlogPostList";
import { ProcessedBlogPostCreate } from "./processedBlogPost/ProcessedBlogPostCreate";
import { ProcessedBlogPostEdit } from "./processedBlogPost/ProcessedBlogPostEdit";
import { ProcessedBlogPostShow } from "./processedBlogPost/ProcessedBlogPostShow";
import { ErrorLogList } from "./errorLog/ErrorLogList";
import { ErrorLogCreate } from "./errorLog/ErrorLogCreate";
import { ErrorLogEdit } from "./errorLog/ErrorLogEdit";
import { ErrorLogShow } from "./errorLog/ErrorLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SubscriberService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="KafkaMessage"
          list={KafkaMessageList}
          edit={KafkaMessageEdit}
          create={KafkaMessageCreate}
          show={KafkaMessageShow}
        />
        <Resource
          name="ProcessedBlogPost"
          list={ProcessedBlogPostList}
          edit={ProcessedBlogPostEdit}
          create={ProcessedBlogPostCreate}
          show={ProcessedBlogPostShow}
        />
        <Resource
          name="ErrorLog"
          list={ErrorLogList}
          edit={ErrorLogEdit}
          create={ErrorLogCreate}
          show={ErrorLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
