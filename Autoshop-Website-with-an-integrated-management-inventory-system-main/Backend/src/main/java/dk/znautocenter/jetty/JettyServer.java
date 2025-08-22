




package dk.znautocenter.jetty;

import org.eclipse.jetty.server.Server;

import org.glassfish.jersey.server.ResourceConfig;

import org.glassfish.jersey.jetty.JettyHttpContainerFactory;

import java.net.URI;


/**
 * @author Abdallah
 * @created 31/09/2021
 */

public class JettyServer {
    public static void main(String[] args) throws Exception {
// scan packages
        final ResourceConfig config = new ResourceConfig().packages("dk.znautocenter.controllers");

        // Start Jetty Server
        final Server server =
                JettyHttpContainerFactory.createServer(
                        URI.create("http://localhost:9000/"), config);
        server.start();

    }}