import Vue from 'vue';
// import Element from 'element-ui/lib/element-ui.common';
import {Col, Row, Button, Card, Table, TableColumn, Tabs, TabPane, Pagination, Loading} from 'element-ui';

const components = {
    Col,
    Row,
    Button,
    Card,
    Table,
    TableColumn,
    Tabs,
    TabPane,
    Pagination,
    Loading
};

// export default () => {
//     Vue.use(Element);
// };

Object.values(components).forEach(com => {
    Vue.use(com);
});
