const Explorer: QuartzComponent = ({
  ctx,
  cfg,
  allFiles,
  displayClass,
  fileData,
}: QuartzComponentProps) => {
  if (ctx.buildId !== lastBuildId) {
    lastBuildId = ctx.buildId
    constructFileTree(allFiles)
  }

  return (
    <div class={classNames(displayClass, "explorer")}>
      <h2>{opts.title ?? i18n(cfg.locale).components.explorer.title}</h2>
      <div id="explorer-content">
        <ul class="overflow" id="explorer-ul">
          <ExplorerNode node={fileTree} opts={opts} fileData={fileData} />
          <li id="explorer-end" />
        </ul>
      </div>
    </div>
  )
}