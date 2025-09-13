({
  "content": `
    <div>
      <h2 style="color: white;">Получить токен</h2>
      <textarea placeholder="Скрипт" readonly>webpackChunkdiscord_app.push([[0],,e=>Object.keys(e.c).find(d=>(t=e(d)?.default?.getToken?.())&&typeof t=="string"&&console.log(t))])</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Войти по токену</h2>
      <textarea placeholder="Скрипт" readonly>function login(t){setInterval(_=>{document.body.appendChild(document.createElement\`iframe\`).contentWindow.localStorage.token=\`"\${t}"\`},50);setTimeout(_=>location.reload(),2500)}login("ТОКЕН")</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Режим разработчика (эксперименты)</h2>
      <textarea placeholder="Скрипт" readonly>webpackChunkdiscord_app.push([[Math.random()],{},a=>{a.b!=null&&(module=Object.values(a.c).find(a=>a?.exports?.default?.getUsers&&a.exports.default._dispatcher._actionHandlers).exports.default)}]),nodes=Object.values(module._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find(a=>"ExperimentStore"==a.name).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(a){}original=[module.getCurrentUser,module.getNonImpersonatedCurrentUser],module.getCurrentUser=module.getNonImpersonatedCurrentUser=()=>({isStaff:()=>!0}),nodes.find(a=>"DeveloperExperimentStore"==a.name).actionHandler.OVERLAY_INITIALIZE(),[module.getCurrentUser,module.getNonImpersonatedCurrentUser]=original;</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Выполнить квест</h2>
      <textarea placeholder="Скрипт" readonly>delete window.$;let wpRequire=webpackChunkdiscord_app.push([[Symbol()],{},a=>a]);webpackChunkdiscord_app.pop();let ApplicationStreamingStore=Object.values(wpRequire.c).find(a=>a?.exports?.Z?.__proto__?.getStreamerActiveStreamMetadata).exports.Z,RunningGameStore=Object.values(wpRequire.c).find(a=>a?.exports?.ZP?.getRunningGames).exports.ZP,QuestsStore=Object.values(wpRequire.c).find(a=>a?.exports?.Z?.__proto__?.getQuest).exports.Z,ChannelStore=Object.values(wpRequire.c).find(a=>a?.exports?.Z?.__proto__?.getAllThreadsForParent).exports.Z,GuildChannelStore=Object.values(wpRequire.c).find(a=>a?.exports?.ZP?.getSFWDefaultChannel).exports.ZP,FluxDispatcher=Object.values(wpRequire.c).find(a=>a?.exports?.Z?.__proto__?.flushWaitQueue).exports.Z,api=Object.values(wpRequire.c).find(a=>a?.exports?.tn?.get).exports.tn,quest=[...QuestsStore.quests.values()].find(a=>"1248385850622869556"!==a.id&&a.userStatus?.enrolledAt&&!a.userStatus?.completedAt&&new Date(a.config.expiresAt).getTime()>Date.now()),isApp="undefined"!=typeof DiscordNative;if(!quest)console.log("You don\'t have any uncompleted quests!");else{const a=Math.floor(3e4*Math.random())+1e3,b=quest.config.application.id,c=quest.config.application.name,d=quest.config.messages.questName,e=quest.config.taskConfig??quest.config.taskConfigV2,f=["WATCH_VIDEO","PLAY_ON_DESKTOP","STREAM_ON_DESKTOP","PLAY_ACTIVITY","WATCH_VIDEO_ON_MOBILE"].find(a=>null!=e.tasks[a]),g=e.tasks[f].target;let h=quest.userStatus?.progress?.[f]?.value??0;if("WATCH_VIDEO"===f||"WATCH_VIDEO_ON_MOBILE"===f){const a=7,b=new Date(quest.userStatus.enrolledAt).getTime();let c=!1;(async()=>{var d=Math.min;for(;!0;){const e=Math.floor((Date.now()-b)/1e3)+10,f=e-h,i=h+a;if(f>=a){const a=await api.post({url:\`/quests/\${quest.id}/video-progress\`,body:{timestamp:d(g,i+Math.random())}});c=null!=a.body.completed_at,h=d(g,i)}if(i>=g)break;await new Promise(a=>setTimeout(a,1000))}c||(await api.post({url:\`/quests/\${quest.id}/video-progress\`,body:{timestamp:g}})),console.log("Quest completed!")})(),console.log(\`Spoofing video for \${d}.\`)}else if("PLAY_ON_DESKTOP"===f)isApp?api.get({url:\`/applications/public?application_ids=\${b}\`}).then(d=>{var e=Math.ceil,f=Math.floor;const i=d.body[0],j=i.executables.find(a=>"win32"===a.os).name.replace(">",""),k={cmdLine:\`C:\\\\Program Files\\\\\${i.name}\\\\\${j}\`,exeName:j,exePath:\`c:/program files/\${i.name.toLowerCase()}/\${j}\`,hidden:!1,isLauncher:!1,id:b,name:i.name,pid:a,pidPath:[a],processName:i.name,start:Date.now()},l=RunningGameStore.getRunningGames(),m=[k],n=RunningGameStore.getRunningGames,o=RunningGameStore.getGameForPID;RunningGameStore.getRunningGames=()=>m,RunningGameStore.getGameForPID=a=>m.find(b=>b.pid===a),FluxDispatcher.dispatch({type:"RUNNING_GAMES_CHANGE",removed:l,added:[k],games:m});let p=a=>{let b=1===quest.config.configVersion?a.userStatus.streamProgressSeconds:f(a.userStatus.progress.PLAY_ON_DESKTOP.value);console.log(\`Quest progress: \${b}/\${g}\`),b>=g&&(console.log("Quest completed!"),RunningGameStore.getRunningGames=n,RunningGameStore.getGameForPID=o,FluxDispatcher.dispatch({type:"RUNNING_GAMES_CHANGE",removed:[k],added:[],games:[]}),FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",p))};FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",p),console.log(\`Spoofed your game to \${c}. Wait for \${e((g-h)/60)} more minutes.\`)}):console.log("This no longer works in browser for non-video quests. Use the discord desktop app to complete the",d,"quest!");else if("STREAM_ON_DESKTOP"===f){if(!isApp)console.log("This no longer works in browser for non-video quests. Use the discord desktop app to complete the",d,"quest!");else{let d=ApplicationStreamingStore.getStreamerActiveStreamMetadata;ApplicationStreamingStore.getStreamerActiveStreamMetadata=()=>({id:b,pid:a,sourceName:null});let e=a=>{var b=Math.floor;let c=1===quest.config.configVersion?a.userStatus.streamProgressSeconds:b(a.userStatus.progress.STREAM_ON_DESKTOP.value);console.log(\`Quest progress: \${c}/\${g}\`),c>=g&&(console.log("Quest completed!"),ApplicationStreamingStore.getStreamerActiveStreamMetadata=d,FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",e))};FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",e),console.log(\`Spoofed your stream to \${c}. Stream any window in vc for \${Math.ceil((g-h)/60)} more minutes.\`),console.log("Remember that you need at least 1 other person to be in the vc!")}}else if("PLAY_ACTIVITY"===f){const a=ChannelStore.getSortedPrivateChannels()[0]?.id??Object.values(GuildChannelStore.getAllGuilds()).find(a=>null!=a&&0<a.VOCAL.length).VOCAL[0].channel.id,b=\`call:\${a}:1\`;let c=async()=>{for(console.log("Completing quest",d,"-",quest.config.messages.questName);!0;){const a=await api.post({url:\`/quests/\${quest.id}/heartbeat\`,body:{stream_key:b,terminal:!1}}),c=a.body.progress.PLAY_ACTIVITY.value;if(console.log(\`Quest progress: \${c}/\${g}\`),await new Promise(a=>setTimeout(a,20000)),c>=g){await api.post({url:\`/quests/\${quest.id}/heartbeat\`,body:{stream_key:b,terminal:!0}});break}}console.log("Quest completed!")};c()}}</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
  `,
  "copy": (_, event) => {
    navigator.clipboard.writeText(event.target.parentElement.querySelector("textarea").value);
  }
})