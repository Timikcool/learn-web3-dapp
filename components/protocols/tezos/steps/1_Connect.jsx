import { useEffect, useState } from "react";
import { Alert, Col, Space, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { getDatahubNodeURL } from "utils/datahub-utils";
import { CHAINS, POLYGON_NETWORKS, POLYGON_PROTOCOLS } from "types/types";

const { Text } = Typography;

const Connect = () => {
  const [connected, setConnected] = useState(false);
  const [fetchingVersion, setFetchingVersion] = useState(false);

  useEffect(() => {
    getConnection();
  }, []);

  const getConnection = async () => {
    setFetchingVersion(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tezos/connect`)
      .then((res) => {
        const balance = res.data;
        setConnected(true);
        setFetchingVersion(false);
      })
      .catch((err) => {
        console.log(err);
        setFetchingVersion(false);
      });
  };

  return (
    <Col style={{ width: "100%" }}>
      {fetchingVersion ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : connected ? (
        <Alert
          message={
            <Space>
              Connected to Tezos
              {/* <Text code>v{version}</Text> */}
            </Space>
          }
          type="success"
          showIcon
        />
      ) : (
        <Alert message="Not connected to Tezos" type="error" showIcon />
      )}
    </Col>
  );
};

export default Connect;
