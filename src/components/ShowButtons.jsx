import { Button } from "./Button";
import { ButtonCounter } from "./ButtonCounter";

export const ShowButtons = () => {
  return (
    <div className="data">
      <h2>Types of Buttons</h2>

      <div className="contenedor ">
        <div className="divisor">
          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info"> {String("<Button />")} </p>
            <Button />
          </div>
        </div>

        <div className="divisor">
          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button color="secondary" /> ')}</p>
            <Button color="secondary" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button color="warning" /> ')}</p>
            <Button color="warning" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button color="danger" /> ')}</p>
            <Button color="danger" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button color="info" /> ')}</p>
            <Button color="info" />
          </div>
        </div>

        <div className="divisor">
          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button disabled="disabled" /> ')}</p>
            <Button disabled="disabled" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">
              {String(' <Button icon="local_grocery_store" /> ')}
            </p>
            <Button icon="search" />
          </div>
        </div>

        <div className="divisor">
          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button size="sm" /> ')}</p>
            <Button size="sm" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button size="md" /> ')}</p>
            <Button size="md" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button size="lg" /> ')}</p>
            <Button size="lg" />
          </div>
        </div>

        <div className="divisor">
          <div className="boton card p-3 w-25 animate__animated animate__pulse">
            <p className="info">{String(' <Button variant="-outline" /> ')}</p>
            <Button variant="-outline" />
          </div>

          <div className="boton card p-3 w-25 animate__animated animate__pulse">
                <ButtonCounter/>
          </div>
        </div>
      </div>
    </div>
  );
};
