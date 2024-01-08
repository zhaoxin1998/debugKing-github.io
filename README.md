# debugKing-github.io
基础框架使用了vuepress(https://vuepress.vuejs.org/)
主题使用了VuePress Theme Hope(https://theme-hope.vuejs.press/zh/0

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class PostRequestExample {
    public static void main(String[] args) throws IOException {
        String url = "http://172.22.121.55:44001/api/v1/match/ext_keyword";
        String requestBody = "your_requirements_doc"; // 自定义的请求参数值

        // 对请求参数进行URL编码
        String encodedRequestBody = URLEncoder.encode(requestBody, "UTF-8");

        // 创建URL对象，包括请求参数
        URL obj = new URL(url + "?requirements_doc=" + encodedRequestBody);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // 设置请求方法为POST
        con.setRequestMethod("POST");

        // 设置请求头
        con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

        // 发送请求
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(encodedRequestBody);
        wr.flush();
        wr.close();

        // 读取响应
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        // 使用Gson库将响应结果转换为实体类对象
        Gson gson = new Gson();
        ResponseData responseData = gson.fromJson(response.toString(), ResponseData.class);

        // 打印响应结果
        System.out.println("Response Body: " + responseData);
    }
}
