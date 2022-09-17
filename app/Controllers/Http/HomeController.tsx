import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { VNode, FunctionComponent } from 'preact'

import { render as preactRenderToString } from 'preact-render-to-string'

export default class HomeController {
  public async show(ctx: HttpContextContract) {
    const query = ctx.request.qs()
    const name = query['name'] || 'friend'
    return render(ctx, <HomePage name={name} />)
  }
}

type HomePageProps = {
  name: string
}
const HomePage: FunctionComponent<HomePageProps> = ({ name, children }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      {children}
      <p>This is happening in preact</p>
    </>
  )
}

type RenderOptions = {
  layout?: string
}
const render = (ctx: HttpContextContract, component: VNode, options: RenderOptions = {}) => {
  const layout = options.layout ?? 'layout/app'
  let contents = ''
  if (component) {
    contents = preactRenderToString(component)
  }
  return ctx.view.render(layout, { contents })
}
