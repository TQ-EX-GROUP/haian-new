# Voip dispatch center

## Use

```javascript
import VoipDispatchCenter from "/path/to/voip-dispatch-center";
Vue.use(VoipDispatchCenter);

this.vdc = new this.$VoipDispatchCenter({
  id: userId,
  dcUrl: "http://192.168.110.189:8001",
  msgApi: "http://192.168.110.189:8082/msg/agent/api/sendMsg",
  voipUrl: "https://192.168.31.247:8001",
  userApi: "", // 指定shine-voip获取用户信息的接口 需考虑跨域问题
  user: {
    id: userId,
    name: userName,
    org: userOrg,
    ...
  }
});
```

## Methods

### `this.vmc.invite(room, type, id, content)` 邀请用户参与视频通话/会议

| name    | description     | type             |
| ------- | --------------- | ---------------- |
| room    | meeting room ID | `String`         |
| type    | meeting type    | `String`         |
| id      | invite user id  | `String, Number` |
| content | exData          | `Object`         |

---

### `this.vmc.sendMsg(msg)` 发送信息到 shine-voip 通话页面

| name | description | type     |
| ---- | ----------- | -------- |
| msg  | message     | `Object` |

---

### `this.vmc.openVoip(room, cb, isHost)` 主动开发并发起一个 voip 视频通话/会议

| name   | description                          | type       | default                                           |
| ------ | ------------------------------------ | ---------- | ------------------------------------------------- |
| room   | meeting room ID                      | `String`   | `` `${this.localId}_room_${performance.now()}` `` |
| cb     | Call back when voip loaded           | `Function` | `undefined`                                       |
| isHost | Whether the current user is the host | `Boolean`  | `true`                                            |

---

### `this.vmc.answerVoip(room, from, isAccept, cb)` 应答一个 voip 邀请

| name     | description                | type       | default     |
| -------- | -------------------------- | ---------- | ----------- |
| room     | meeting room ID            | `String`   | -           |
| from     | Invite sponsor             | `String`   | -           |
| isAccept | accept or refuse           | `Boolean`  | -           |
| cb       | Call back when voip loaded | `Function` | `undefined` |

---

### `this.vmc.destroy()` 销毁操作

---

### Event Methods

- `this.vmc.on('eventType', function)`
- `this.vmc.once('eventType', function)`
- `this.vmc.rm('eventType')`
- `this.vmc.rmAll()`

## Event Type

| name       | description                           | argument |
| ---------- | ------------------------------------- | -------- |
| `loaded`   | when voip loaded                      | null     |
| `unload`     | when voip unloaded                    | null     |
| `end`        | when voip end                         | null     |
| `receive`    | when receive msg from voip            | event    |
| `call-video` | when some people invited current user | event    |
| ``accept``     | when some people accept your invite   | event    |
| `refuse`     | when some people refuse your invite   | event    |
