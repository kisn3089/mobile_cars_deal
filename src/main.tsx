import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "@/styles/RootLayout.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// 1. search 기능 ( 차량 이름으로 검색 &carClassName ) 단축키 기능 포함 cmd + K
// 2. filter 기능
//    - 차량 가액으로 4가지 정도의 넛지를 줌 &price
//    - tag에 포함되는 차량 filter &carTypeTags
// 3. sort 기능 ( 년식 year, 키로수 &drivingDistance )
// 4. 최초 1회 애니메이션 ( 단축키 설명 및 감사 인사 ) ( LocalStorage 활용 )
// (merge) 5.Error 핸들링과 Loading 상태 보여줄 수 있는 설정 구현

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RootLayout>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RootLayout>
);
