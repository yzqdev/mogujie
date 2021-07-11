

module.exports = {
  devServer: {
    port:8021
    // proxy: {
    //   '/socket.io': {
    //     target: 'http://localhost:8020',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   'sockjs-node': {
    //     target: 'http://localhost:8020',
    //     ws: false,
    //     changeOrigin: true
    //   },
    // }
  }
}
